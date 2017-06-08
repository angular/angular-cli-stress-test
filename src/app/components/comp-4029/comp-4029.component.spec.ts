/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4029Component } from './comp-4029.component';

describe('Comp4029Component', () => {
  let component: Comp4029Component;
  let fixture: ComponentFixture<Comp4029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
