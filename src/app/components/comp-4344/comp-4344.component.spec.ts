/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4344Component } from './comp-4344.component';

describe('Comp4344Component', () => {
  let component: Comp4344Component;
  let fixture: ComponentFixture<Comp4344Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4344Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4344Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
