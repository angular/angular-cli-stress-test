/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp612Component } from './comp-612.component';

describe('Comp612Component', () => {
  let component: Comp612Component;
  let fixture: ComponentFixture<Comp612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
