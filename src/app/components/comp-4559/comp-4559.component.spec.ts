/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4559Component } from './comp-4559.component';

describe('Comp4559Component', () => {
  let component: Comp4559Component;
  let fixture: ComponentFixture<Comp4559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
