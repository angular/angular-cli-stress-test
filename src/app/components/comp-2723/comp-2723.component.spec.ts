/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2723Component } from './comp-2723.component';

describe('Comp2723Component', () => {
  let component: Comp2723Component;
  let fixture: ComponentFixture<Comp2723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
