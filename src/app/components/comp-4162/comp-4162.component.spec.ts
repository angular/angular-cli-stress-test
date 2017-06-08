/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4162Component } from './comp-4162.component';

describe('Comp4162Component', () => {
  let component: Comp4162Component;
  let fixture: ComponentFixture<Comp4162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
