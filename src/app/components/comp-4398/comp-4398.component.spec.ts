/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4398Component } from './comp-4398.component';

describe('Comp4398Component', () => {
  let component: Comp4398Component;
  let fixture: ComponentFixture<Comp4398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
