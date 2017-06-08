/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1010Component } from './comp-1010.component';

describe('Comp1010Component', () => {
  let component: Comp1010Component;
  let fixture: ComponentFixture<Comp1010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
