/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3167Component } from './comp-3167.component';

describe('Comp3167Component', () => {
  let component: Comp3167Component;
  let fixture: ComponentFixture<Comp3167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
