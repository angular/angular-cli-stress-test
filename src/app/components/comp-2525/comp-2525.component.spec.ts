/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2525Component } from './comp-2525.component';

describe('Comp2525Component', () => {
  let component: Comp2525Component;
  let fixture: ComponentFixture<Comp2525Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2525Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2525Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
