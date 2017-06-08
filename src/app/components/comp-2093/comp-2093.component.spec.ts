/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2093Component } from './comp-2093.component';

describe('Comp2093Component', () => {
  let component: Comp2093Component;
  let fixture: ComponentFixture<Comp2093Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2093Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2093Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
