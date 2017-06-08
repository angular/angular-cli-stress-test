/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2225Component } from './comp-2225.component';

describe('Comp2225Component', () => {
  let component: Comp2225Component;
  let fixture: ComponentFixture<Comp2225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
