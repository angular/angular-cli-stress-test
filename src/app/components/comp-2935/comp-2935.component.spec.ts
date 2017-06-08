/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2935Component } from './comp-2935.component';

describe('Comp2935Component', () => {
  let component: Comp2935Component;
  let fixture: ComponentFixture<Comp2935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
