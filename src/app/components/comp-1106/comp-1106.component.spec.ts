/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1106Component } from './comp-1106.component';

describe('Comp1106Component', () => {
  let component: Comp1106Component;
  let fixture: ComponentFixture<Comp1106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
