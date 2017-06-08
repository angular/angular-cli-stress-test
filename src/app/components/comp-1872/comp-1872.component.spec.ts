/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1872Component } from './comp-1872.component';

describe('Comp1872Component', () => {
  let component: Comp1872Component;
  let fixture: ComponentFixture<Comp1872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
