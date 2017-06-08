/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2127Component } from './comp-2127.component';

describe('Comp2127Component', () => {
  let component: Comp2127Component;
  let fixture: ComponentFixture<Comp2127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
