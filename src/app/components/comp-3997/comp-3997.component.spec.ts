/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3997Component } from './comp-3997.component';

describe('Comp3997Component', () => {
  let component: Comp3997Component;
  let fixture: ComponentFixture<Comp3997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
