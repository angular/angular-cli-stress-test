/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp166Component } from './comp-166.component';

describe('Comp166Component', () => {
  let component: Comp166Component;
  let fixture: ComponentFixture<Comp166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
