/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2956Component } from './comp-2956.component';

describe('Comp2956Component', () => {
  let component: Comp2956Component;
  let fixture: ComponentFixture<Comp2956Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2956Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2956Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
