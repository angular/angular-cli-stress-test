/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp559Component } from './comp-559.component';

describe('Comp559Component', () => {
  let component: Comp559Component;
  let fixture: ComponentFixture<Comp559Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp559Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
