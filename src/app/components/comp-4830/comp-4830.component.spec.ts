/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4830Component } from './comp-4830.component';

describe('Comp4830Component', () => {
  let component: Comp4830Component;
  let fixture: ComponentFixture<Comp4830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
