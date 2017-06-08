/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4817Component } from './comp-4817.component';

describe('Comp4817Component', () => {
  let component: Comp4817Component;
  let fixture: ComponentFixture<Comp4817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
