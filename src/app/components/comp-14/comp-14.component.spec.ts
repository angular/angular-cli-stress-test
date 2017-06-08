/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp14Component } from './comp-14.component';

describe('Comp14Component', () => {
  let component: Comp14Component;
  let fixture: ComponentFixture<Comp14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
