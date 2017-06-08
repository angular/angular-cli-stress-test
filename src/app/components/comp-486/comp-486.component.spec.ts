/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp486Component } from './comp-486.component';

describe('Comp486Component', () => {
  let component: Comp486Component;
  let fixture: ComponentFixture<Comp486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
