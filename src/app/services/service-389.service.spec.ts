/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service389Service } from './service-389.service';

describe('Service389Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service389Service]
    });
  });

  it('should ...', inject([Service389Service], (service: Service389Service) => {
    expect(service).toBeTruthy();
  }));
});
