/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3136Component } from './comp-3136.component';

describe('Comp3136Component', () => {
  let component: Comp3136Component;
  let fixture: ComponentFixture<Comp3136Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3136Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3136Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
