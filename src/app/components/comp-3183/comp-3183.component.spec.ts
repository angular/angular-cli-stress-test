/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3183Component } from './comp-3183.component';

describe('Comp3183Component', () => {
  let component: Comp3183Component;
  let fixture: ComponentFixture<Comp3183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
