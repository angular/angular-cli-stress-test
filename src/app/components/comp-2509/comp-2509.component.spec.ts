/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2509Component } from './comp-2509.component';

describe('Comp2509Component', () => {
  let component: Comp2509Component;
  let fixture: ComponentFixture<Comp2509Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2509Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2509Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
