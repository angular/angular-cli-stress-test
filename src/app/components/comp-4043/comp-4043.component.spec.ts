/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4043Component } from './comp-4043.component';

describe('Comp4043Component', () => {
  let component: Comp4043Component;
  let fixture: ComponentFixture<Comp4043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
