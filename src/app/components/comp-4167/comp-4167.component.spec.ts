/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4167Component } from './comp-4167.component';

describe('Comp4167Component', () => {
  let component: Comp4167Component;
  let fixture: ComponentFixture<Comp4167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
