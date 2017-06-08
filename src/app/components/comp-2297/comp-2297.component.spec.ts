/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2297Component } from './comp-2297.component';

describe('Comp2297Component', () => {
  let component: Comp2297Component;
  let fixture: ComponentFixture<Comp2297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
