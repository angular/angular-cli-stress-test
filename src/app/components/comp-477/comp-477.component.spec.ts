/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp477Component } from './comp-477.component';

describe('Comp477Component', () => {
  let component: Comp477Component;
  let fixture: ComponentFixture<Comp477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
