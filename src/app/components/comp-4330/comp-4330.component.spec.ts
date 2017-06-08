/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4330Component } from './comp-4330.component';

describe('Comp4330Component', () => {
  let component: Comp4330Component;
  let fixture: ComponentFixture<Comp4330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
