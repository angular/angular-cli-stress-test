/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4107Component } from './comp-4107.component';

describe('Comp4107Component', () => {
  let component: Comp4107Component;
  let fixture: ComponentFixture<Comp4107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
