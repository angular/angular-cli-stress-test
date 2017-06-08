/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3559Component } from './comp-3559.component';

describe('Comp3559Component', () => {
  let component: Comp3559Component;
  let fixture: ComponentFixture<Comp3559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
