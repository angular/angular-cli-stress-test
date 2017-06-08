/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4225Component } from './comp-4225.component';

describe('Comp4225Component', () => {
  let component: Comp4225Component;
  let fixture: ComponentFixture<Comp4225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
