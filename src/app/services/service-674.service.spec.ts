/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service674Service } from './service-674.service';

describe('Service674Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service674Service]
    });
  });

  it('should ...', inject([Service674Service], (service: Service674Service) => {
    expect(service).toBeTruthy();
  }));
});
