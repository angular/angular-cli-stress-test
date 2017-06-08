/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service615Service } from './service-615.service';

describe('Service615Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service615Service]
    });
  });

  it('should ...', inject([Service615Service], (service: Service615Service) => {
    expect(service).toBeTruthy();
  }));
});
