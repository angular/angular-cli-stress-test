/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service830Service } from './service-830.service';

describe('Service830Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service830Service]
    });
  });

  it('should ...', inject([Service830Service], (service: Service830Service) => {
    expect(service).toBeTruthy();
  }));
});
