/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4057Component } from './comp-4057.component';

describe('Comp4057Component', () => {
  let component: Comp4057Component;
  let fixture: ComponentFixture<Comp4057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
