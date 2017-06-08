/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp773Component } from './comp-773.component';

describe('Comp773Component', () => {
  let component: Comp773Component;
  let fixture: ComponentFixture<Comp773Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp773Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
