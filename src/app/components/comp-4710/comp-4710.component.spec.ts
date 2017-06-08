/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4710Component } from './comp-4710.component';

describe('Comp4710Component', () => {
  let component: Comp4710Component;
  let fixture: ComponentFixture<Comp4710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
