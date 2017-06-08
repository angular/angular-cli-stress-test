/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4060Component } from './comp-4060.component';

describe('Comp4060Component', () => {
  let component: Comp4060Component;
  let fixture: ComponentFixture<Comp4060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
