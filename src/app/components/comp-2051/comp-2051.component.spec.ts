/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2051Component } from './comp-2051.component';

describe('Comp2051Component', () => {
  let component: Comp2051Component;
  let fixture: ComponentFixture<Comp2051Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2051Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2051Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
