/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp76Component } from './comp-76.component';

describe('Comp76Component', () => {
  let component: Comp76Component;
  let fixture: ComponentFixture<Comp76Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
