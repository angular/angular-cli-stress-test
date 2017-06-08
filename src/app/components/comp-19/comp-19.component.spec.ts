/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp19Component } from './comp-19.component';

describe('Comp19Component', () => {
  let component: Comp19Component;
  let fixture: ComponentFixture<Comp19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
