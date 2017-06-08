/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4334Component } from './comp-4334.component';

describe('Comp4334Component', () => {
  let component: Comp4334Component;
  let fixture: ComponentFixture<Comp4334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
