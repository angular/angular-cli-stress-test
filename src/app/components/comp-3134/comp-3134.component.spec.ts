/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3134Component } from './comp-3134.component';

describe('Comp3134Component', () => {
  let component: Comp3134Component;
  let fixture: ComponentFixture<Comp3134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
