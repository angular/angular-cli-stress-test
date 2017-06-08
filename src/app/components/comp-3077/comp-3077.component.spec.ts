/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3077Component } from './comp-3077.component';

describe('Comp3077Component', () => {
  let component: Comp3077Component;
  let fixture: ComponentFixture<Comp3077Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3077Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
