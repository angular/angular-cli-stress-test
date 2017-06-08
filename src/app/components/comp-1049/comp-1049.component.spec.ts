/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1049Component } from './comp-1049.component';

describe('Comp1049Component', () => {
  let component: Comp1049Component;
  let fixture: ComponentFixture<Comp1049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
