/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3049Component } from './comp-3049.component';

describe('Comp3049Component', () => {
  let component: Comp3049Component;
  let fixture: ComponentFixture<Comp3049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
