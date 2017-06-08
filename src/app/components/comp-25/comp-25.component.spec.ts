/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp25Component } from './comp-25.component';

describe('Comp25Component', () => {
  let component: Comp25Component;
  let fixture: ComponentFixture<Comp25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
