/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1233Component } from './comp-1233.component';

describe('Comp1233Component', () => {
  let component: Comp1233Component;
  let fixture: ComponentFixture<Comp1233Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1233Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
