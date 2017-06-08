/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp74Component } from './comp-74.component';

describe('Comp74Component', () => {
  let component: Comp74Component;
  let fixture: ComponentFixture<Comp74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
